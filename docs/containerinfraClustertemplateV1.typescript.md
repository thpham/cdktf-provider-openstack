# `containerinfraClustertemplateV1` Submodule <a name="`containerinfraClustertemplateV1` Submodule" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerinfraClustertemplateV1 <a name="ContainerinfraClustertemplateV1" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1 openstack_containerinfra_clustertemplate_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer"></a>

```typescript
import { containerinfraClustertemplateV1 } from '@ithings/cdktf-provider-openstack'

new containerinfraClustertemplateV1.ContainerinfraClustertemplateV1(scope: Construct, id: string, config: ContainerinfraClustertemplateV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config">ContainerinfraClustertemplateV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config">ContainerinfraClustertemplateV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetApiserverPort">resetApiserverPort</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetClusterDistro">resetClusterDistro</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetDnsNameserver">resetDnsNameserver</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetDockerStorageDriver">resetDockerStorageDriver</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetDockerVolumeSize">resetDockerVolumeSize</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetExternalNetworkId">resetExternalNetworkId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetFixedNetwork">resetFixedNetwork</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetFixedSubnet">resetFixedSubnet</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetFlavor">resetFlavor</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetFloatingIpEnabled">resetFloatingIpEnabled</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetHidden">resetHidden</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetHttpProxy">resetHttpProxy</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetHttpsProxy">resetHttpsProxy</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetInsecureRegistry">resetInsecureRegistry</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetKeypairId">resetKeypairId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetMasterFlavor">resetMasterFlavor</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetMasterLbEnabled">resetMasterLbEnabled</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetNetworkDriver">resetNetworkDriver</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetNoProxy">resetNoProxy</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetPublic">resetPublic</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetRegistryEnabled">resetRegistryEnabled</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetServerType">resetServerType</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetTlsDisabled">resetTlsDisabled</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetVolumeDriver">resetVolumeDriver</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.putTimeouts"></a>

```typescript
public putTimeouts(value: ContainerinfraClustertemplateV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts">ContainerinfraClustertemplateV1Timeouts</a>

---

##### `resetApiserverPort` <a name="resetApiserverPort" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetApiserverPort"></a>

```typescript
public resetApiserverPort(): void
```

##### `resetClusterDistro` <a name="resetClusterDistro" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetClusterDistro"></a>

```typescript
public resetClusterDistro(): void
```

##### `resetDnsNameserver` <a name="resetDnsNameserver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetDnsNameserver"></a>

```typescript
public resetDnsNameserver(): void
```

##### `resetDockerStorageDriver` <a name="resetDockerStorageDriver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetDockerStorageDriver"></a>

```typescript
public resetDockerStorageDriver(): void
```

##### `resetDockerVolumeSize` <a name="resetDockerVolumeSize" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetDockerVolumeSize"></a>

```typescript
public resetDockerVolumeSize(): void
```

##### `resetExternalNetworkId` <a name="resetExternalNetworkId" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetExternalNetworkId"></a>

```typescript
public resetExternalNetworkId(): void
```

##### `resetFixedNetwork` <a name="resetFixedNetwork" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetFixedNetwork"></a>

```typescript
public resetFixedNetwork(): void
```

##### `resetFixedSubnet` <a name="resetFixedSubnet" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetFixedSubnet"></a>

```typescript
public resetFixedSubnet(): void
```

##### `resetFlavor` <a name="resetFlavor" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetFlavor"></a>

```typescript
public resetFlavor(): void
```

##### `resetFloatingIpEnabled` <a name="resetFloatingIpEnabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetFloatingIpEnabled"></a>

```typescript
public resetFloatingIpEnabled(): void
```

##### `resetHidden` <a name="resetHidden" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetHidden"></a>

```typescript
public resetHidden(): void
```

##### `resetHttpProxy` <a name="resetHttpProxy" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetHttpProxy"></a>

```typescript
public resetHttpProxy(): void
```

##### `resetHttpsProxy` <a name="resetHttpsProxy" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetHttpsProxy"></a>

```typescript
public resetHttpsProxy(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInsecureRegistry` <a name="resetInsecureRegistry" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetInsecureRegistry"></a>

```typescript
public resetInsecureRegistry(): void
```

##### `resetKeypairId` <a name="resetKeypairId" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetKeypairId"></a>

```typescript
public resetKeypairId(): void
```

##### `resetLabels` <a name="resetLabels" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMasterFlavor` <a name="resetMasterFlavor" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetMasterFlavor"></a>

```typescript
public resetMasterFlavor(): void
```

##### `resetMasterLbEnabled` <a name="resetMasterLbEnabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetMasterLbEnabled"></a>

```typescript
public resetMasterLbEnabled(): void
```

##### `resetNetworkDriver` <a name="resetNetworkDriver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetNetworkDriver"></a>

```typescript
public resetNetworkDriver(): void
```

##### `resetNoProxy` <a name="resetNoProxy" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetNoProxy"></a>

```typescript
public resetNoProxy(): void
```

##### `resetPublic` <a name="resetPublic" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetPublic"></a>

```typescript
public resetPublic(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRegistryEnabled` <a name="resetRegistryEnabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetRegistryEnabled"></a>

```typescript
public resetRegistryEnabled(): void
```

##### `resetServerType` <a name="resetServerType" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetServerType"></a>

```typescript
public resetServerType(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTlsDisabled` <a name="resetTlsDisabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetTlsDisabled"></a>

```typescript
public resetTlsDisabled(): void
```

##### `resetVolumeDriver` <a name="resetVolumeDriver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetVolumeDriver"></a>

```typescript
public resetVolumeDriver(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerinfraClustertemplateV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.isConstruct"></a>

```typescript
import { containerinfraClustertemplateV1 } from '@ithings/cdktf-provider-openstack'

containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.isTerraformElement"></a>

```typescript
import { containerinfraClustertemplateV1 } from '@ithings/cdktf-provider-openstack'

containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.isTerraformResource"></a>

```typescript
import { containerinfraClustertemplateV1 } from '@ithings/cdktf-provider-openstack'

containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.generateConfigForImport"></a>

```typescript
import { containerinfraClustertemplateV1 } from '@ithings/cdktf-provider-openstack'

containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ContainerinfraClustertemplateV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerinfraClustertemplateV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerinfraClustertemplateV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerinfraClustertemplateV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference">ContainerinfraClustertemplateV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.apiserverPortInput">apiserverPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.clusterDistroInput">clusterDistroInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.coeInput">coeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dnsNameserverInput">dnsNameserverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dockerStorageDriverInput">dockerStorageDriverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dockerVolumeSizeInput">dockerVolumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.externalNetworkIdInput">externalNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.fixedNetworkInput">fixedNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.fixedSubnetInput">fixedSubnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.flavorInput">flavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.floatingIpEnabledInput">floatingIpEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.hiddenInput">hiddenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.httpProxyInput">httpProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.httpsProxyInput">httpsProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.insecureRegistryInput">insecureRegistryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.keypairIdInput">keypairIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.masterFlavorInput">masterFlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.masterLbEnabledInput">masterLbEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.networkDriverInput">networkDriverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.noProxyInput">noProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.publicInput">publicInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.registryEnabledInput">registryEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.serverTypeInput">serverTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts">ContainerinfraClustertemplateV1Timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.tlsDisabledInput">tlsDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.volumeDriverInput">volumeDriverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.apiserverPort">apiserverPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.clusterDistro">clusterDistro</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.coe">coe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dnsNameserver">dnsNameserver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dockerStorageDriver">dockerStorageDriver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dockerVolumeSize">dockerVolumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.externalNetworkId">externalNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.fixedNetwork">fixedNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.fixedSubnet">fixedSubnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.flavor">flavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.floatingIpEnabled">floatingIpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.hidden">hidden</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.httpProxy">httpProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.httpsProxy">httpsProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.insecureRegistry">insecureRegistry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.keypairId">keypairId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.masterFlavor">masterFlavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.masterLbEnabled">masterLbEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.networkDriver">networkDriver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.noProxy">noProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.public">public</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.registryEnabled">registryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.serverType">serverType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.tlsDisabled">tlsDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.volumeDriver">volumeDriver</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerinfraClustertemplateV1TimeoutsOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference">ContainerinfraClustertemplateV1TimeoutsOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `apiserverPortInput`<sup>Optional</sup> <a name="apiserverPortInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.apiserverPortInput"></a>

```typescript
public readonly apiserverPortInput: number;
```

- *Type:* number

---

##### `clusterDistroInput`<sup>Optional</sup> <a name="clusterDistroInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.clusterDistroInput"></a>

```typescript
public readonly clusterDistroInput: string;
```

- *Type:* string

---

##### `coeInput`<sup>Optional</sup> <a name="coeInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.coeInput"></a>

```typescript
public readonly coeInput: string;
```

- *Type:* string

---

##### `dnsNameserverInput`<sup>Optional</sup> <a name="dnsNameserverInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dnsNameserverInput"></a>

```typescript
public readonly dnsNameserverInput: string;
```

- *Type:* string

---

##### `dockerStorageDriverInput`<sup>Optional</sup> <a name="dockerStorageDriverInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dockerStorageDriverInput"></a>

```typescript
public readonly dockerStorageDriverInput: string;
```

- *Type:* string

---

##### `dockerVolumeSizeInput`<sup>Optional</sup> <a name="dockerVolumeSizeInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dockerVolumeSizeInput"></a>

```typescript
public readonly dockerVolumeSizeInput: number;
```

- *Type:* number

---

##### `externalNetworkIdInput`<sup>Optional</sup> <a name="externalNetworkIdInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.externalNetworkIdInput"></a>

```typescript
public readonly externalNetworkIdInput: string;
```

- *Type:* string

---

##### `fixedNetworkInput`<sup>Optional</sup> <a name="fixedNetworkInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.fixedNetworkInput"></a>

```typescript
public readonly fixedNetworkInput: string;
```

- *Type:* string

---

##### `fixedSubnetInput`<sup>Optional</sup> <a name="fixedSubnetInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.fixedSubnetInput"></a>

```typescript
public readonly fixedSubnetInput: string;
```

- *Type:* string

---

##### `flavorInput`<sup>Optional</sup> <a name="flavorInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.flavorInput"></a>

```typescript
public readonly flavorInput: string;
```

- *Type:* string

---

##### `floatingIpEnabledInput`<sup>Optional</sup> <a name="floatingIpEnabledInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.floatingIpEnabledInput"></a>

```typescript
public readonly floatingIpEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hiddenInput`<sup>Optional</sup> <a name="hiddenInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.hiddenInput"></a>

```typescript
public readonly hiddenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpProxyInput`<sup>Optional</sup> <a name="httpProxyInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.httpProxyInput"></a>

```typescript
public readonly httpProxyInput: string;
```

- *Type:* string

---

##### `httpsProxyInput`<sup>Optional</sup> <a name="httpsProxyInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.httpsProxyInput"></a>

```typescript
public readonly httpsProxyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `insecureRegistryInput`<sup>Optional</sup> <a name="insecureRegistryInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.insecureRegistryInput"></a>

```typescript
public readonly insecureRegistryInput: string;
```

- *Type:* string

---

##### `keypairIdInput`<sup>Optional</sup> <a name="keypairIdInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.keypairIdInput"></a>

```typescript
public readonly keypairIdInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `masterFlavorInput`<sup>Optional</sup> <a name="masterFlavorInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.masterFlavorInput"></a>

```typescript
public readonly masterFlavorInput: string;
```

- *Type:* string

---

##### `masterLbEnabledInput`<sup>Optional</sup> <a name="masterLbEnabledInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.masterLbEnabledInput"></a>

```typescript
public readonly masterLbEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkDriverInput`<sup>Optional</sup> <a name="networkDriverInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.networkDriverInput"></a>

```typescript
public readonly networkDriverInput: string;
```

- *Type:* string

---

##### `noProxyInput`<sup>Optional</sup> <a name="noProxyInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.noProxyInput"></a>

```typescript
public readonly noProxyInput: string;
```

- *Type:* string

---

##### `publicInput`<sup>Optional</sup> <a name="publicInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.publicInput"></a>

```typescript
public readonly publicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `registryEnabledInput`<sup>Optional</sup> <a name="registryEnabledInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.registryEnabledInput"></a>

```typescript
public readonly registryEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serverTypeInput`<sup>Optional</sup> <a name="serverTypeInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.serverTypeInput"></a>

```typescript
public readonly serverTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ContainerinfraClustertemplateV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts">ContainerinfraClustertemplateV1Timeouts</a>

---

##### `tlsDisabledInput`<sup>Optional</sup> <a name="tlsDisabledInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.tlsDisabledInput"></a>

```typescript
public readonly tlsDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `volumeDriverInput`<sup>Optional</sup> <a name="volumeDriverInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.volumeDriverInput"></a>

```typescript
public readonly volumeDriverInput: string;
```

- *Type:* string

---

##### `apiserverPort`<sup>Required</sup> <a name="apiserverPort" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.apiserverPort"></a>

```typescript
public readonly apiserverPort: number;
```

- *Type:* number

---

##### `clusterDistro`<sup>Required</sup> <a name="clusterDistro" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.clusterDistro"></a>

```typescript
public readonly clusterDistro: string;
```

- *Type:* string

---

##### `coe`<sup>Required</sup> <a name="coe" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.coe"></a>

```typescript
public readonly coe: string;
```

- *Type:* string

---

##### `dnsNameserver`<sup>Required</sup> <a name="dnsNameserver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dnsNameserver"></a>

```typescript
public readonly dnsNameserver: string;
```

- *Type:* string

---

##### `dockerStorageDriver`<sup>Required</sup> <a name="dockerStorageDriver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dockerStorageDriver"></a>

```typescript
public readonly dockerStorageDriver: string;
```

- *Type:* string

---

##### `dockerVolumeSize`<sup>Required</sup> <a name="dockerVolumeSize" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dockerVolumeSize"></a>

```typescript
public readonly dockerVolumeSize: number;
```

- *Type:* number

---

##### `externalNetworkId`<sup>Required</sup> <a name="externalNetworkId" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.externalNetworkId"></a>

```typescript
public readonly externalNetworkId: string;
```

- *Type:* string

---

##### `fixedNetwork`<sup>Required</sup> <a name="fixedNetwork" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.fixedNetwork"></a>

```typescript
public readonly fixedNetwork: string;
```

- *Type:* string

---

##### `fixedSubnet`<sup>Required</sup> <a name="fixedSubnet" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.fixedSubnet"></a>

```typescript
public readonly fixedSubnet: string;
```

- *Type:* string

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.flavor"></a>

```typescript
public readonly flavor: string;
```

- *Type:* string

---

##### `floatingIpEnabled`<sup>Required</sup> <a name="floatingIpEnabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.floatingIpEnabled"></a>

```typescript
public readonly floatingIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hidden`<sup>Required</sup> <a name="hidden" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.hidden"></a>

```typescript
public readonly hidden: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpProxy`<sup>Required</sup> <a name="httpProxy" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.httpProxy"></a>

```typescript
public readonly httpProxy: string;
```

- *Type:* string

---

##### `httpsProxy`<sup>Required</sup> <a name="httpsProxy" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.httpsProxy"></a>

```typescript
public readonly httpsProxy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `insecureRegistry`<sup>Required</sup> <a name="insecureRegistry" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.insecureRegistry"></a>

```typescript
public readonly insecureRegistry: string;
```

- *Type:* string

---

##### `keypairId`<sup>Required</sup> <a name="keypairId" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.keypairId"></a>

```typescript
public readonly keypairId: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `masterFlavor`<sup>Required</sup> <a name="masterFlavor" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.masterFlavor"></a>

```typescript
public readonly masterFlavor: string;
```

- *Type:* string

---

##### `masterLbEnabled`<sup>Required</sup> <a name="masterLbEnabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.masterLbEnabled"></a>

```typescript
public readonly masterLbEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkDriver`<sup>Required</sup> <a name="networkDriver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.networkDriver"></a>

```typescript
public readonly networkDriver: string;
```

- *Type:* string

---

##### `noProxy`<sup>Required</sup> <a name="noProxy" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.noProxy"></a>

```typescript
public readonly noProxy: string;
```

- *Type:* string

---

##### `public`<sup>Required</sup> <a name="public" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.public"></a>

```typescript
public readonly public: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `registryEnabled`<sup>Required</sup> <a name="registryEnabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.registryEnabled"></a>

```typescript
public readonly registryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serverType`<sup>Required</sup> <a name="serverType" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.serverType"></a>

```typescript
public readonly serverType: string;
```

- *Type:* string

---

##### `tlsDisabled`<sup>Required</sup> <a name="tlsDisabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.tlsDisabled"></a>

```typescript
public readonly tlsDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `volumeDriver`<sup>Required</sup> <a name="volumeDriver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.volumeDriver"></a>

```typescript
public readonly volumeDriver: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerinfraClustertemplateV1Config <a name="ContainerinfraClustertemplateV1Config" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.Initializer"></a>

```typescript
import { containerinfraClustertemplateV1 } from '@ithings/cdktf-provider-openstack'

const containerinfraClustertemplateV1Config: containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.coe">coe</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#coe ContainerinfraClustertemplateV1#coe}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.image">image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#image ContainerinfraClustertemplateV1#image}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#name ContainerinfraClustertemplateV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.apiserverPort">apiserverPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#apiserver_port ContainerinfraClustertemplateV1#apiserver_port}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.clusterDistro">clusterDistro</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#cluster_distro ContainerinfraClustertemplateV1#cluster_distro}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.dnsNameserver">dnsNameserver</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#dns_nameserver ContainerinfraClustertemplateV1#dns_nameserver}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.dockerStorageDriver">dockerStorageDriver</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#docker_storage_driver ContainerinfraClustertemplateV1#docker_storage_driver}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.dockerVolumeSize">dockerVolumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#docker_volume_size ContainerinfraClustertemplateV1#docker_volume_size}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.externalNetworkId">externalNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#external_network_id ContainerinfraClustertemplateV1#external_network_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.fixedNetwork">fixedNetwork</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#fixed_network ContainerinfraClustertemplateV1#fixed_network}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.fixedSubnet">fixedSubnet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#fixed_subnet ContainerinfraClustertemplateV1#fixed_subnet}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.flavor">flavor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#flavor ContainerinfraClustertemplateV1#flavor}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.floatingIpEnabled">floatingIpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#floating_ip_enabled ContainerinfraClustertemplateV1#floating_ip_enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.hidden">hidden</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#hidden ContainerinfraClustertemplateV1#hidden}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.httpProxy">httpProxy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#http_proxy ContainerinfraClustertemplateV1#http_proxy}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.httpsProxy">httpsProxy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#https_proxy ContainerinfraClustertemplateV1#https_proxy}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#id ContainerinfraClustertemplateV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.insecureRegistry">insecureRegistry</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#insecure_registry ContainerinfraClustertemplateV1#insecure_registry}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.keypairId">keypairId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#keypair_id ContainerinfraClustertemplateV1#keypair_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#labels ContainerinfraClustertemplateV1#labels}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.masterFlavor">masterFlavor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#master_flavor ContainerinfraClustertemplateV1#master_flavor}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.masterLbEnabled">masterLbEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#master_lb_enabled ContainerinfraClustertemplateV1#master_lb_enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.networkDriver">networkDriver</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#network_driver ContainerinfraClustertemplateV1#network_driver}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.noProxy">noProxy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#no_proxy ContainerinfraClustertemplateV1#no_proxy}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.public">public</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#public ContainerinfraClustertemplateV1#public}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#region ContainerinfraClustertemplateV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.registryEnabled">registryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#registry_enabled ContainerinfraClustertemplateV1#registry_enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.serverType">serverType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#server_type ContainerinfraClustertemplateV1#server_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts">ContainerinfraClustertemplateV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.tlsDisabled">tlsDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#tls_disabled ContainerinfraClustertemplateV1#tls_disabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.volumeDriver">volumeDriver</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#volume_driver ContainerinfraClustertemplateV1#volume_driver}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `coe`<sup>Required</sup> <a name="coe" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.coe"></a>

```typescript
public readonly coe: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#coe ContainerinfraClustertemplateV1#coe}.

---

##### `image`<sup>Required</sup> <a name="image" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#image ContainerinfraClustertemplateV1#image}.

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#name ContainerinfraClustertemplateV1#name}.

---

##### `apiserverPort`<sup>Optional</sup> <a name="apiserverPort" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.apiserverPort"></a>

```typescript
public readonly apiserverPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#apiserver_port ContainerinfraClustertemplateV1#apiserver_port}.

---

##### `clusterDistro`<sup>Optional</sup> <a name="clusterDistro" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.clusterDistro"></a>

```typescript
public readonly clusterDistro: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#cluster_distro ContainerinfraClustertemplateV1#cluster_distro}.

---

##### `dnsNameserver`<sup>Optional</sup> <a name="dnsNameserver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.dnsNameserver"></a>

```typescript
public readonly dnsNameserver: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#dns_nameserver ContainerinfraClustertemplateV1#dns_nameserver}.

---

##### `dockerStorageDriver`<sup>Optional</sup> <a name="dockerStorageDriver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.dockerStorageDriver"></a>

```typescript
public readonly dockerStorageDriver: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#docker_storage_driver ContainerinfraClustertemplateV1#docker_storage_driver}.

---

##### `dockerVolumeSize`<sup>Optional</sup> <a name="dockerVolumeSize" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.dockerVolumeSize"></a>

```typescript
public readonly dockerVolumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#docker_volume_size ContainerinfraClustertemplateV1#docker_volume_size}.

---

##### `externalNetworkId`<sup>Optional</sup> <a name="externalNetworkId" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.externalNetworkId"></a>

```typescript
public readonly externalNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#external_network_id ContainerinfraClustertemplateV1#external_network_id}.

---

##### `fixedNetwork`<sup>Optional</sup> <a name="fixedNetwork" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.fixedNetwork"></a>

```typescript
public readonly fixedNetwork: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#fixed_network ContainerinfraClustertemplateV1#fixed_network}.

---

##### `fixedSubnet`<sup>Optional</sup> <a name="fixedSubnet" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.fixedSubnet"></a>

```typescript
public readonly fixedSubnet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#fixed_subnet ContainerinfraClustertemplateV1#fixed_subnet}.

---

##### `flavor`<sup>Optional</sup> <a name="flavor" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.flavor"></a>

```typescript
public readonly flavor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#flavor ContainerinfraClustertemplateV1#flavor}.

---

##### `floatingIpEnabled`<sup>Optional</sup> <a name="floatingIpEnabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.floatingIpEnabled"></a>

```typescript
public readonly floatingIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#floating_ip_enabled ContainerinfraClustertemplateV1#floating_ip_enabled}.

---

##### `hidden`<sup>Optional</sup> <a name="hidden" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.hidden"></a>

```typescript
public readonly hidden: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#hidden ContainerinfraClustertemplateV1#hidden}.

---

##### `httpProxy`<sup>Optional</sup> <a name="httpProxy" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.httpProxy"></a>

```typescript
public readonly httpProxy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#http_proxy ContainerinfraClustertemplateV1#http_proxy}.

---

##### `httpsProxy`<sup>Optional</sup> <a name="httpsProxy" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.httpsProxy"></a>

```typescript
public readonly httpsProxy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#https_proxy ContainerinfraClustertemplateV1#https_proxy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#id ContainerinfraClustertemplateV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insecureRegistry`<sup>Optional</sup> <a name="insecureRegistry" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.insecureRegistry"></a>

```typescript
public readonly insecureRegistry: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#insecure_registry ContainerinfraClustertemplateV1#insecure_registry}.

---

##### `keypairId`<sup>Optional</sup> <a name="keypairId" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.keypairId"></a>

```typescript
public readonly keypairId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#keypair_id ContainerinfraClustertemplateV1#keypair_id}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#labels ContainerinfraClustertemplateV1#labels}.

---

##### `masterFlavor`<sup>Optional</sup> <a name="masterFlavor" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.masterFlavor"></a>

```typescript
public readonly masterFlavor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#master_flavor ContainerinfraClustertemplateV1#master_flavor}.

---

##### `masterLbEnabled`<sup>Optional</sup> <a name="masterLbEnabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.masterLbEnabled"></a>

```typescript
public readonly masterLbEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#master_lb_enabled ContainerinfraClustertemplateV1#master_lb_enabled}.

---

##### `networkDriver`<sup>Optional</sup> <a name="networkDriver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.networkDriver"></a>

```typescript
public readonly networkDriver: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#network_driver ContainerinfraClustertemplateV1#network_driver}.

---

##### `noProxy`<sup>Optional</sup> <a name="noProxy" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.noProxy"></a>

```typescript
public readonly noProxy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#no_proxy ContainerinfraClustertemplateV1#no_proxy}.

---

##### `public`<sup>Optional</sup> <a name="public" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.public"></a>

```typescript
public readonly public: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#public ContainerinfraClustertemplateV1#public}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#region ContainerinfraClustertemplateV1#region}.

---

##### `registryEnabled`<sup>Optional</sup> <a name="registryEnabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.registryEnabled"></a>

```typescript
public readonly registryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#registry_enabled ContainerinfraClustertemplateV1#registry_enabled}.

---

##### `serverType`<sup>Optional</sup> <a name="serverType" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.serverType"></a>

```typescript
public readonly serverType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#server_type ContainerinfraClustertemplateV1#server_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerinfraClustertemplateV1Timeouts;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts">ContainerinfraClustertemplateV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#timeouts ContainerinfraClustertemplateV1#timeouts}

---

##### `tlsDisabled`<sup>Optional</sup> <a name="tlsDisabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.tlsDisabled"></a>

```typescript
public readonly tlsDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#tls_disabled ContainerinfraClustertemplateV1#tls_disabled}.

---

##### `volumeDriver`<sup>Optional</sup> <a name="volumeDriver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.volumeDriver"></a>

```typescript
public readonly volumeDriver: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#volume_driver ContainerinfraClustertemplateV1#volume_driver}.

---

### ContainerinfraClustertemplateV1Timeouts <a name="ContainerinfraClustertemplateV1Timeouts" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts.Initializer"></a>

```typescript
import { containerinfraClustertemplateV1 } from '@ithings/cdktf-provider-openstack'

const containerinfraClustertemplateV1Timeouts: containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#create ContainerinfraClustertemplateV1#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#delete ContainerinfraClustertemplateV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#create ContainerinfraClustertemplateV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#delete ContainerinfraClustertemplateV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerinfraClustertemplateV1TimeoutsOutputReference <a name="ContainerinfraClustertemplateV1TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { containerinfraClustertemplateV1 } from '@ithings/cdktf-provider-openstack'

new containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts">ContainerinfraClustertemplateV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerinfraClustertemplateV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts">ContainerinfraClustertemplateV1Timeouts</a>

---



