# `computeQuotasetV2` Submodule <a name="`computeQuotasetV2` Submodule" id="@ithings/cdktf-provider-openstack.computeQuotasetV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeQuotasetV2 <a name="ComputeQuotasetV2" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2 openstack_compute_quotaset_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer"></a>

```typescript
import { computeQuotasetV2 } from '@ithings/cdktf-provider-openstack'

new computeQuotasetV2.ComputeQuotasetV2(scope: Construct, id: string, config: ComputeQuotasetV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config">ComputeQuotasetV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config">ComputeQuotasetV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetCores">resetCores</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetFixedIps">resetFixedIps</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetFloatingIps">resetFloatingIps</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetInjectedFileContentBytes">resetInjectedFileContentBytes</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetInjectedFilePathBytes">resetInjectedFilePathBytes</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetInjectedFiles">resetInjectedFiles</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetInstances">resetInstances</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetKeyPairs">resetKeyPairs</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetMetadataItems">resetMetadataItems</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetRam">resetRam</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetSecurityGroupRules">resetSecurityGroupRules</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetServerGroupMembers">resetServerGroupMembers</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetServerGroups">resetServerGroups</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeQuotasetV2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts">ComputeQuotasetV2Timeouts</a>

---

##### `resetCores` <a name="resetCores" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetCores"></a>

```typescript
public resetCores(): void
```

##### `resetFixedIps` <a name="resetFixedIps" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetFixedIps"></a>

```typescript
public resetFixedIps(): void
```

##### `resetFloatingIps` <a name="resetFloatingIps" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetFloatingIps"></a>

```typescript
public resetFloatingIps(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInjectedFileContentBytes` <a name="resetInjectedFileContentBytes" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetInjectedFileContentBytes"></a>

```typescript
public resetInjectedFileContentBytes(): void
```

##### `resetInjectedFilePathBytes` <a name="resetInjectedFilePathBytes" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetInjectedFilePathBytes"></a>

```typescript
public resetInjectedFilePathBytes(): void
```

##### `resetInjectedFiles` <a name="resetInjectedFiles" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetInjectedFiles"></a>

```typescript
public resetInjectedFiles(): void
```

##### `resetInstances` <a name="resetInstances" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetInstances"></a>

```typescript
public resetInstances(): void
```

##### `resetKeyPairs` <a name="resetKeyPairs" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetKeyPairs"></a>

```typescript
public resetKeyPairs(): void
```

##### `resetMetadataItems` <a name="resetMetadataItems" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetMetadataItems"></a>

```typescript
public resetMetadataItems(): void
```

##### `resetRam` <a name="resetRam" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetRam"></a>

```typescript
public resetRam(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSecurityGroupRules` <a name="resetSecurityGroupRules" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetSecurityGroupRules"></a>

```typescript
public resetSecurityGroupRules(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

##### `resetServerGroupMembers` <a name="resetServerGroupMembers" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetServerGroupMembers"></a>

```typescript
public resetServerGroupMembers(): void
```

##### `resetServerGroups` <a name="resetServerGroups" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetServerGroups"></a>

```typescript
public resetServerGroups(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeQuotasetV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.isConstruct"></a>

```typescript
import { computeQuotasetV2 } from '@ithings/cdktf-provider-openstack'

computeQuotasetV2.ComputeQuotasetV2.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.isTerraformElement"></a>

```typescript
import { computeQuotasetV2 } from '@ithings/cdktf-provider-openstack'

computeQuotasetV2.ComputeQuotasetV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.isTerraformResource"></a>

```typescript
import { computeQuotasetV2 } from '@ithings/cdktf-provider-openstack'

computeQuotasetV2.ComputeQuotasetV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.generateConfigForImport"></a>

```typescript
import { computeQuotasetV2 } from '@ithings/cdktf-provider-openstack'

computeQuotasetV2.ComputeQuotasetV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeQuotasetV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeQuotasetV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeQuotasetV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeQuotasetV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference">ComputeQuotasetV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.coresInput">coresInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.fixedIpsInput">fixedIpsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.floatingIpsInput">floatingIpsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.injectedFileContentBytesInput">injectedFileContentBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.injectedFilePathBytesInput">injectedFilePathBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.injectedFilesInput">injectedFilesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.instancesInput">instancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.keyPairsInput">keyPairsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.metadataItemsInput">metadataItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.ramInput">ramInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.securityGroupRulesInput">securityGroupRulesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.securityGroupsInput">securityGroupsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.serverGroupMembersInput">serverGroupMembersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.serverGroupsInput">serverGroupsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts">ComputeQuotasetV2Timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.cores">cores</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.fixedIps">fixedIps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.floatingIps">floatingIps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.injectedFileContentBytes">injectedFileContentBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.injectedFilePathBytes">injectedFilePathBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.injectedFiles">injectedFiles</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.instances">instances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.keyPairs">keyPairs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.metadataItems">metadataItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.ram">ram</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.securityGroupRules">securityGroupRules</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.securityGroups">securityGroups</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.serverGroupMembers">serverGroupMembers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.serverGroups">serverGroups</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeQuotasetV2TimeoutsOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference">ComputeQuotasetV2TimeoutsOutputReference</a>

---

##### `coresInput`<sup>Optional</sup> <a name="coresInput" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.coresInput"></a>

```typescript
public readonly coresInput: number;
```

- *Type:* number

---

##### `fixedIpsInput`<sup>Optional</sup> <a name="fixedIpsInput" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.fixedIpsInput"></a>

```typescript
public readonly fixedIpsInput: number;
```

- *Type:* number

---

##### `floatingIpsInput`<sup>Optional</sup> <a name="floatingIpsInput" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.floatingIpsInput"></a>

```typescript
public readonly floatingIpsInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `injectedFileContentBytesInput`<sup>Optional</sup> <a name="injectedFileContentBytesInput" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.injectedFileContentBytesInput"></a>

```typescript
public readonly injectedFileContentBytesInput: number;
```

- *Type:* number

---

##### `injectedFilePathBytesInput`<sup>Optional</sup> <a name="injectedFilePathBytesInput" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.injectedFilePathBytesInput"></a>

```typescript
public readonly injectedFilePathBytesInput: number;
```

- *Type:* number

---

##### `injectedFilesInput`<sup>Optional</sup> <a name="injectedFilesInput" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.injectedFilesInput"></a>

```typescript
public readonly injectedFilesInput: number;
```

- *Type:* number

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.instancesInput"></a>

```typescript
public readonly instancesInput: number;
```

- *Type:* number

---

##### `keyPairsInput`<sup>Optional</sup> <a name="keyPairsInput" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.keyPairsInput"></a>

```typescript
public readonly keyPairsInput: number;
```

- *Type:* number

---

##### `metadataItemsInput`<sup>Optional</sup> <a name="metadataItemsInput" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.metadataItemsInput"></a>

```typescript
public readonly metadataItemsInput: number;
```

- *Type:* number

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `ramInput`<sup>Optional</sup> <a name="ramInput" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.ramInput"></a>

```typescript
public readonly ramInput: number;
```

- *Type:* number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `securityGroupRulesInput`<sup>Optional</sup> <a name="securityGroupRulesInput" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.securityGroupRulesInput"></a>

```typescript
public readonly securityGroupRulesInput: number;
```

- *Type:* number

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: number;
```

- *Type:* number

---

##### `serverGroupMembersInput`<sup>Optional</sup> <a name="serverGroupMembersInput" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.serverGroupMembersInput"></a>

```typescript
public readonly serverGroupMembersInput: number;
```

- *Type:* number

---

##### `serverGroupsInput`<sup>Optional</sup> <a name="serverGroupsInput" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.serverGroupsInput"></a>

```typescript
public readonly serverGroupsInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeQuotasetV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts">ComputeQuotasetV2Timeouts</a>

---

##### `cores`<sup>Required</sup> <a name="cores" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.cores"></a>

```typescript
public readonly cores: number;
```

- *Type:* number

---

##### `fixedIps`<sup>Required</sup> <a name="fixedIps" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.fixedIps"></a>

```typescript
public readonly fixedIps: number;
```

- *Type:* number

---

##### `floatingIps`<sup>Required</sup> <a name="floatingIps" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.floatingIps"></a>

```typescript
public readonly floatingIps: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `injectedFileContentBytes`<sup>Required</sup> <a name="injectedFileContentBytes" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.injectedFileContentBytes"></a>

```typescript
public readonly injectedFileContentBytes: number;
```

- *Type:* number

---

##### `injectedFilePathBytes`<sup>Required</sup> <a name="injectedFilePathBytes" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.injectedFilePathBytes"></a>

```typescript
public readonly injectedFilePathBytes: number;
```

- *Type:* number

---

##### `injectedFiles`<sup>Required</sup> <a name="injectedFiles" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.injectedFiles"></a>

```typescript
public readonly injectedFiles: number;
```

- *Type:* number

---

##### `instances`<sup>Required</sup> <a name="instances" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.instances"></a>

```typescript
public readonly instances: number;
```

- *Type:* number

---

##### `keyPairs`<sup>Required</sup> <a name="keyPairs" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.keyPairs"></a>

```typescript
public readonly keyPairs: number;
```

- *Type:* number

---

##### `metadataItems`<sup>Required</sup> <a name="metadataItems" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.metadataItems"></a>

```typescript
public readonly metadataItems: number;
```

- *Type:* number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `ram`<sup>Required</sup> <a name="ram" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.ram"></a>

```typescript
public readonly ram: number;
```

- *Type:* number

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `securityGroupRules`<sup>Required</sup> <a name="securityGroupRules" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.securityGroupRules"></a>

```typescript
public readonly securityGroupRules: number;
```

- *Type:* number

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.securityGroups"></a>

```typescript
public readonly securityGroups: number;
```

- *Type:* number

---

##### `serverGroupMembers`<sup>Required</sup> <a name="serverGroupMembers" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.serverGroupMembers"></a>

```typescript
public readonly serverGroupMembers: number;
```

- *Type:* number

---

##### `serverGroups`<sup>Required</sup> <a name="serverGroups" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.serverGroups"></a>

```typescript
public readonly serverGroups: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeQuotasetV2Config <a name="ComputeQuotasetV2Config" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.Initializer"></a>

```typescript
import { computeQuotasetV2 } from '@ithings/cdktf-provider-openstack'

const computeQuotasetV2Config: computeQuotasetV2.ComputeQuotasetV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#project_id ComputeQuotasetV2#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.cores">cores</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#cores ComputeQuotasetV2#cores}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.fixedIps">fixedIps</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#fixed_ips ComputeQuotasetV2#fixed_ips}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.floatingIps">floatingIps</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#floating_ips ComputeQuotasetV2#floating_ips}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#id ComputeQuotasetV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.injectedFileContentBytes">injectedFileContentBytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#injected_file_content_bytes ComputeQuotasetV2#injected_file_content_bytes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.injectedFilePathBytes">injectedFilePathBytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#injected_file_path_bytes ComputeQuotasetV2#injected_file_path_bytes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.injectedFiles">injectedFiles</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#injected_files ComputeQuotasetV2#injected_files}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.instances">instances</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#instances ComputeQuotasetV2#instances}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.keyPairs">keyPairs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#key_pairs ComputeQuotasetV2#key_pairs}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.metadataItems">metadataItems</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#metadata_items ComputeQuotasetV2#metadata_items}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.ram">ram</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#ram ComputeQuotasetV2#ram}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#region ComputeQuotasetV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.securityGroupRules">securityGroupRules</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#security_group_rules ComputeQuotasetV2#security_group_rules}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.securityGroups">securityGroups</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#security_groups ComputeQuotasetV2#security_groups}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.serverGroupMembers">serverGroupMembers</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#server_group_members ComputeQuotasetV2#server_group_members}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.serverGroups">serverGroups</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#server_groups ComputeQuotasetV2#server_groups}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts">ComputeQuotasetV2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#project_id ComputeQuotasetV2#project_id}.

---

##### `cores`<sup>Optional</sup> <a name="cores" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.cores"></a>

```typescript
public readonly cores: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#cores ComputeQuotasetV2#cores}.

---

##### `fixedIps`<sup>Optional</sup> <a name="fixedIps" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.fixedIps"></a>

```typescript
public readonly fixedIps: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#fixed_ips ComputeQuotasetV2#fixed_ips}.

---

##### `floatingIps`<sup>Optional</sup> <a name="floatingIps" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.floatingIps"></a>

```typescript
public readonly floatingIps: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#floating_ips ComputeQuotasetV2#floating_ips}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#id ComputeQuotasetV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `injectedFileContentBytes`<sup>Optional</sup> <a name="injectedFileContentBytes" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.injectedFileContentBytes"></a>

```typescript
public readonly injectedFileContentBytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#injected_file_content_bytes ComputeQuotasetV2#injected_file_content_bytes}.

---

##### `injectedFilePathBytes`<sup>Optional</sup> <a name="injectedFilePathBytes" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.injectedFilePathBytes"></a>

```typescript
public readonly injectedFilePathBytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#injected_file_path_bytes ComputeQuotasetV2#injected_file_path_bytes}.

---

##### `injectedFiles`<sup>Optional</sup> <a name="injectedFiles" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.injectedFiles"></a>

```typescript
public readonly injectedFiles: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#injected_files ComputeQuotasetV2#injected_files}.

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.instances"></a>

```typescript
public readonly instances: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#instances ComputeQuotasetV2#instances}.

---

##### `keyPairs`<sup>Optional</sup> <a name="keyPairs" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.keyPairs"></a>

```typescript
public readonly keyPairs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#key_pairs ComputeQuotasetV2#key_pairs}.

---

##### `metadataItems`<sup>Optional</sup> <a name="metadataItems" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.metadataItems"></a>

```typescript
public readonly metadataItems: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#metadata_items ComputeQuotasetV2#metadata_items}.

---

##### `ram`<sup>Optional</sup> <a name="ram" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.ram"></a>

```typescript
public readonly ram: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#ram ComputeQuotasetV2#ram}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#region ComputeQuotasetV2#region}.

---

##### `securityGroupRules`<sup>Optional</sup> <a name="securityGroupRules" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.securityGroupRules"></a>

```typescript
public readonly securityGroupRules: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#security_group_rules ComputeQuotasetV2#security_group_rules}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.securityGroups"></a>

```typescript
public readonly securityGroups: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#security_groups ComputeQuotasetV2#security_groups}.

---

##### `serverGroupMembers`<sup>Optional</sup> <a name="serverGroupMembers" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.serverGroupMembers"></a>

```typescript
public readonly serverGroupMembers: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#server_group_members ComputeQuotasetV2#server_group_members}.

---

##### `serverGroups`<sup>Optional</sup> <a name="serverGroups" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.serverGroups"></a>

```typescript
public readonly serverGroups: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#server_groups ComputeQuotasetV2#server_groups}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Config.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeQuotasetV2Timeouts;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts">ComputeQuotasetV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#timeouts ComputeQuotasetV2#timeouts}

---

### ComputeQuotasetV2Timeouts <a name="ComputeQuotasetV2Timeouts" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts.Initializer"></a>

```typescript
import { computeQuotasetV2 } from '@ithings/cdktf-provider-openstack'

const computeQuotasetV2Timeouts: computeQuotasetV2.ComputeQuotasetV2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#create ComputeQuotasetV2#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#delete ComputeQuotasetV2#delete}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#update ComputeQuotasetV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#create ComputeQuotasetV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#delete ComputeQuotasetV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_quotaset_v2#update ComputeQuotasetV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeQuotasetV2TimeoutsOutputReference <a name="ComputeQuotasetV2TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.Initializer"></a>

```typescript
import { computeQuotasetV2 } from '@ithings/cdktf-provider-openstack'

new computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts">ComputeQuotasetV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeQuotasetV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeQuotasetV2.ComputeQuotasetV2Timeouts">ComputeQuotasetV2Timeouts</a>

---



