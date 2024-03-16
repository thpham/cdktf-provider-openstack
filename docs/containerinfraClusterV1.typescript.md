# `containerinfraClusterV1` Submodule <a name="`containerinfraClusterV1` Submodule" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerinfraClusterV1 <a name="ContainerinfraClusterV1" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1 openstack_containerinfra_cluster_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer"></a>

```typescript
import { containerinfraClusterV1 } from '@ithings/cdktf-provider-openstack'

new containerinfraClusterV1.ContainerinfraClusterV1(scope: Construct, id: string, config: ContainerinfraClusterV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config">ContainerinfraClusterV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config">ContainerinfraClusterV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetCreateTimeout">resetCreateTimeout</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetDiscoveryUrl">resetDiscoveryUrl</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetDockerVolumeSize">resetDockerVolumeSize</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetFixedNetwork">resetFixedNetwork</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetFixedSubnet">resetFixedSubnet</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetFlavor">resetFlavor</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetFloatingIpEnabled">resetFloatingIpEnabled</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetKeypair">resetKeypair</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetMasterCount">resetMasterCount</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetMasterFlavor">resetMasterFlavor</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetMergeLabels">resetMergeLabels</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetNodeCount">resetNodeCount</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.putTimeouts"></a>

```typescript
public putTimeouts(value: ContainerinfraClusterV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts">ContainerinfraClusterV1Timeouts</a>

---

##### `resetCreateTimeout` <a name="resetCreateTimeout" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetCreateTimeout"></a>

```typescript
public resetCreateTimeout(): void
```

##### `resetDiscoveryUrl` <a name="resetDiscoveryUrl" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetDiscoveryUrl"></a>

```typescript
public resetDiscoveryUrl(): void
```

##### `resetDockerVolumeSize` <a name="resetDockerVolumeSize" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetDockerVolumeSize"></a>

```typescript
public resetDockerVolumeSize(): void
```

##### `resetFixedNetwork` <a name="resetFixedNetwork" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetFixedNetwork"></a>

```typescript
public resetFixedNetwork(): void
```

##### `resetFixedSubnet` <a name="resetFixedSubnet" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetFixedSubnet"></a>

```typescript
public resetFixedSubnet(): void
```

##### `resetFlavor` <a name="resetFlavor" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetFlavor"></a>

```typescript
public resetFlavor(): void
```

##### `resetFloatingIpEnabled` <a name="resetFloatingIpEnabled" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetFloatingIpEnabled"></a>

```typescript
public resetFloatingIpEnabled(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeypair` <a name="resetKeypair" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetKeypair"></a>

```typescript
public resetKeypair(): void
```

##### `resetLabels` <a name="resetLabels" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMasterCount` <a name="resetMasterCount" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetMasterCount"></a>

```typescript
public resetMasterCount(): void
```

##### `resetMasterFlavor` <a name="resetMasterFlavor" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetMasterFlavor"></a>

```typescript
public resetMasterFlavor(): void
```

##### `resetMergeLabels` <a name="resetMergeLabels" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetMergeLabels"></a>

```typescript
public resetMergeLabels(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNodeCount` <a name="resetNodeCount" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetNodeCount"></a>

```typescript
public resetNodeCount(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerinfraClusterV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.isConstruct"></a>

```typescript
import { containerinfraClusterV1 } from '@ithings/cdktf-provider-openstack'

containerinfraClusterV1.ContainerinfraClusterV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.isTerraformElement"></a>

```typescript
import { containerinfraClusterV1 } from '@ithings/cdktf-provider-openstack'

containerinfraClusterV1.ContainerinfraClusterV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.isTerraformResource"></a>

```typescript
import { containerinfraClusterV1 } from '@ithings/cdktf-provider-openstack'

containerinfraClusterV1.ContainerinfraClusterV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.generateConfigForImport"></a>

```typescript
import { containerinfraClusterV1 } from '@ithings/cdktf-provider-openstack'

containerinfraClusterV1.ContainerinfraClusterV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ContainerinfraClusterV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerinfraClusterV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerinfraClusterV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerinfraClusterV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.apiAddress">apiAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.coeVersion">coeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.containerVersion">containerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.kubeconfig">kubeconfig</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.masterAddresses">masterAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.nodeAddresses">nodeAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.stackId">stackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference">ContainerinfraClusterV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.clusterTemplateIdInput">clusterTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.createTimeoutInput">createTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.discoveryUrlInput">discoveryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.dockerVolumeSizeInput">dockerVolumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.fixedNetworkInput">fixedNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.fixedSubnetInput">fixedSubnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.flavorInput">flavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.floatingIpEnabledInput">floatingIpEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.keypairInput">keypairInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.masterCountInput">masterCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.masterFlavorInput">masterFlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.mergeLabelsInput">mergeLabelsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.nodeCountInput">nodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts">ContainerinfraClusterV1Timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.clusterTemplateId">clusterTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.createTimeout">createTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.discoveryUrl">discoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.dockerVolumeSize">dockerVolumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.fixedNetwork">fixedNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.fixedSubnet">fixedSubnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.flavor">flavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.floatingIpEnabled">floatingIpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.keypair">keypair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.masterCount">masterCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.masterFlavor">masterFlavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.mergeLabels">mergeLabels</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiAddress`<sup>Required</sup> <a name="apiAddress" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.apiAddress"></a>

```typescript
public readonly apiAddress: string;
```

- *Type:* string

---

##### `coeVersion`<sup>Required</sup> <a name="coeVersion" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.coeVersion"></a>

```typescript
public readonly coeVersion: string;
```

- *Type:* string

---

##### `containerVersion`<sup>Required</sup> <a name="containerVersion" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.containerVersion"></a>

```typescript
public readonly containerVersion: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `kubeconfig`<sup>Required</sup> <a name="kubeconfig" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.kubeconfig"></a>

```typescript
public readonly kubeconfig: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `masterAddresses`<sup>Required</sup> <a name="masterAddresses" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.masterAddresses"></a>

```typescript
public readonly masterAddresses: string[];
```

- *Type:* string[]

---

##### `nodeAddresses`<sup>Required</sup> <a name="nodeAddresses" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.nodeAddresses"></a>

```typescript
public readonly nodeAddresses: string[];
```

- *Type:* string[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerinfraClusterV1TimeoutsOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference">ContainerinfraClusterV1TimeoutsOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `clusterTemplateIdInput`<sup>Optional</sup> <a name="clusterTemplateIdInput" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.clusterTemplateIdInput"></a>

```typescript
public readonly clusterTemplateIdInput: string;
```

- *Type:* string

---

##### `createTimeoutInput`<sup>Optional</sup> <a name="createTimeoutInput" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.createTimeoutInput"></a>

```typescript
public readonly createTimeoutInput: number;
```

- *Type:* number

---

##### `discoveryUrlInput`<sup>Optional</sup> <a name="discoveryUrlInput" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.discoveryUrlInput"></a>

```typescript
public readonly discoveryUrlInput: string;
```

- *Type:* string

---

##### `dockerVolumeSizeInput`<sup>Optional</sup> <a name="dockerVolumeSizeInput" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.dockerVolumeSizeInput"></a>

```typescript
public readonly dockerVolumeSizeInput: number;
```

- *Type:* number

---

##### `fixedNetworkInput`<sup>Optional</sup> <a name="fixedNetworkInput" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.fixedNetworkInput"></a>

```typescript
public readonly fixedNetworkInput: string;
```

- *Type:* string

---

##### `fixedSubnetInput`<sup>Optional</sup> <a name="fixedSubnetInput" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.fixedSubnetInput"></a>

```typescript
public readonly fixedSubnetInput: string;
```

- *Type:* string

---

##### `flavorInput`<sup>Optional</sup> <a name="flavorInput" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.flavorInput"></a>

```typescript
public readonly flavorInput: string;
```

- *Type:* string

---

##### `floatingIpEnabledInput`<sup>Optional</sup> <a name="floatingIpEnabledInput" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.floatingIpEnabledInput"></a>

```typescript
public readonly floatingIpEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keypairInput`<sup>Optional</sup> <a name="keypairInput" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.keypairInput"></a>

```typescript
public readonly keypairInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `masterCountInput`<sup>Optional</sup> <a name="masterCountInput" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.masterCountInput"></a>

```typescript
public readonly masterCountInput: number;
```

- *Type:* number

---

##### `masterFlavorInput`<sup>Optional</sup> <a name="masterFlavorInput" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.masterFlavorInput"></a>

```typescript
public readonly masterFlavorInput: string;
```

- *Type:* string

---

##### `mergeLabelsInput`<sup>Optional</sup> <a name="mergeLabelsInput" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.mergeLabelsInput"></a>

```typescript
public readonly mergeLabelsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.nodeCountInput"></a>

```typescript
public readonly nodeCountInput: number;
```

- *Type:* number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ContainerinfraClusterV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts">ContainerinfraClusterV1Timeouts</a>

---

##### `clusterTemplateId`<sup>Required</sup> <a name="clusterTemplateId" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.clusterTemplateId"></a>

```typescript
public readonly clusterTemplateId: string;
```

- *Type:* string

---

##### `createTimeout`<sup>Required</sup> <a name="createTimeout" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.createTimeout"></a>

```typescript
public readonly createTimeout: number;
```

- *Type:* number

---

##### `discoveryUrl`<sup>Required</sup> <a name="discoveryUrl" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.discoveryUrl"></a>

```typescript
public readonly discoveryUrl: string;
```

- *Type:* string

---

##### `dockerVolumeSize`<sup>Required</sup> <a name="dockerVolumeSize" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.dockerVolumeSize"></a>

```typescript
public readonly dockerVolumeSize: number;
```

- *Type:* number

---

##### `fixedNetwork`<sup>Required</sup> <a name="fixedNetwork" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.fixedNetwork"></a>

```typescript
public readonly fixedNetwork: string;
```

- *Type:* string

---

##### `fixedSubnet`<sup>Required</sup> <a name="fixedSubnet" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.fixedSubnet"></a>

```typescript
public readonly fixedSubnet: string;
```

- *Type:* string

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.flavor"></a>

```typescript
public readonly flavor: string;
```

- *Type:* string

---

##### `floatingIpEnabled`<sup>Required</sup> <a name="floatingIpEnabled" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.floatingIpEnabled"></a>

```typescript
public readonly floatingIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keypair`<sup>Required</sup> <a name="keypair" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.keypair"></a>

```typescript
public readonly keypair: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `masterCount`<sup>Required</sup> <a name="masterCount" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.masterCount"></a>

```typescript
public readonly masterCount: number;
```

- *Type:* number

---

##### `masterFlavor`<sup>Required</sup> <a name="masterFlavor" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.masterFlavor"></a>

```typescript
public readonly masterFlavor: string;
```

- *Type:* string

---

##### `mergeLabels`<sup>Required</sup> <a name="mergeLabels" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.mergeLabels"></a>

```typescript
public readonly mergeLabels: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerinfraClusterV1Config <a name="ContainerinfraClusterV1Config" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.Initializer"></a>

```typescript
import { containerinfraClusterV1 } from '@ithings/cdktf-provider-openstack'

const containerinfraClusterV1Config: containerinfraClusterV1.ContainerinfraClusterV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.clusterTemplateId">clusterTemplateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#cluster_template_id ContainerinfraClusterV1#cluster_template_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.createTimeout">createTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#create_timeout ContainerinfraClusterV1#create_timeout}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.discoveryUrl">discoveryUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#discovery_url ContainerinfraClusterV1#discovery_url}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.dockerVolumeSize">dockerVolumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#docker_volume_size ContainerinfraClusterV1#docker_volume_size}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.fixedNetwork">fixedNetwork</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#fixed_network ContainerinfraClusterV1#fixed_network}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.fixedSubnet">fixedSubnet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#fixed_subnet ContainerinfraClusterV1#fixed_subnet}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.flavor">flavor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#flavor ContainerinfraClusterV1#flavor}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.floatingIpEnabled">floatingIpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#floating_ip_enabled ContainerinfraClusterV1#floating_ip_enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#id ContainerinfraClusterV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.keypair">keypair</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#keypair ContainerinfraClusterV1#keypair}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#labels ContainerinfraClusterV1#labels}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.masterCount">masterCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#master_count ContainerinfraClusterV1#master_count}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.masterFlavor">masterFlavor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#master_flavor ContainerinfraClusterV1#master_flavor}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.mergeLabels">mergeLabels</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#merge_labels ContainerinfraClusterV1#merge_labels}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#name ContainerinfraClusterV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.nodeCount">nodeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#node_count ContainerinfraClusterV1#node_count}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#region ContainerinfraClusterV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts">ContainerinfraClusterV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterTemplateId`<sup>Required</sup> <a name="clusterTemplateId" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.clusterTemplateId"></a>

```typescript
public readonly clusterTemplateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#cluster_template_id ContainerinfraClusterV1#cluster_template_id}.

---

##### `createTimeout`<sup>Optional</sup> <a name="createTimeout" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.createTimeout"></a>

```typescript
public readonly createTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#create_timeout ContainerinfraClusterV1#create_timeout}.

---

##### `discoveryUrl`<sup>Optional</sup> <a name="discoveryUrl" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.discoveryUrl"></a>

```typescript
public readonly discoveryUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#discovery_url ContainerinfraClusterV1#discovery_url}.

---

##### `dockerVolumeSize`<sup>Optional</sup> <a name="dockerVolumeSize" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.dockerVolumeSize"></a>

```typescript
public readonly dockerVolumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#docker_volume_size ContainerinfraClusterV1#docker_volume_size}.

---

##### `fixedNetwork`<sup>Optional</sup> <a name="fixedNetwork" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.fixedNetwork"></a>

```typescript
public readonly fixedNetwork: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#fixed_network ContainerinfraClusterV1#fixed_network}.

---

##### `fixedSubnet`<sup>Optional</sup> <a name="fixedSubnet" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.fixedSubnet"></a>

```typescript
public readonly fixedSubnet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#fixed_subnet ContainerinfraClusterV1#fixed_subnet}.

---

##### `flavor`<sup>Optional</sup> <a name="flavor" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.flavor"></a>

```typescript
public readonly flavor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#flavor ContainerinfraClusterV1#flavor}.

---

##### `floatingIpEnabled`<sup>Optional</sup> <a name="floatingIpEnabled" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.floatingIpEnabled"></a>

```typescript
public readonly floatingIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#floating_ip_enabled ContainerinfraClusterV1#floating_ip_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#id ContainerinfraClusterV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keypair`<sup>Optional</sup> <a name="keypair" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.keypair"></a>

```typescript
public readonly keypair: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#keypair ContainerinfraClusterV1#keypair}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#labels ContainerinfraClusterV1#labels}.

---

##### `masterCount`<sup>Optional</sup> <a name="masterCount" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.masterCount"></a>

```typescript
public readonly masterCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#master_count ContainerinfraClusterV1#master_count}.

---

##### `masterFlavor`<sup>Optional</sup> <a name="masterFlavor" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.masterFlavor"></a>

```typescript
public readonly masterFlavor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#master_flavor ContainerinfraClusterV1#master_flavor}.

---

##### `mergeLabels`<sup>Optional</sup> <a name="mergeLabels" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.mergeLabels"></a>

```typescript
public readonly mergeLabels: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#merge_labels ContainerinfraClusterV1#merge_labels}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#name ContainerinfraClusterV1#name}.

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#node_count ContainerinfraClusterV1#node_count}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#region ContainerinfraClusterV1#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerinfraClusterV1Timeouts;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts">ContainerinfraClusterV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#timeouts ContainerinfraClusterV1#timeouts}

---

### ContainerinfraClusterV1Timeouts <a name="ContainerinfraClusterV1Timeouts" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts.Initializer"></a>

```typescript
import { containerinfraClusterV1 } from '@ithings/cdktf-provider-openstack'

const containerinfraClusterV1Timeouts: containerinfraClusterV1.ContainerinfraClusterV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#create ContainerinfraClusterV1#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#delete ContainerinfraClusterV1#delete}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#update ContainerinfraClusterV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#create ContainerinfraClusterV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#delete ContainerinfraClusterV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#update ContainerinfraClusterV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerinfraClusterV1TimeoutsOutputReference <a name="ContainerinfraClusterV1TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { containerinfraClusterV1 } from '@ithings/cdktf-provider-openstack'

new containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts">ContainerinfraClusterV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerinfraClusterV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts">ContainerinfraClusterV1Timeouts</a>

---



